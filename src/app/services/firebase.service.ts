import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import 'rxjs-compat/add/operator/map';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {UserModel} from './user.model';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DataModel} from './data.model';

@Injectable()
export class FirebaseService {

  items: Observable<any>;
  user: Observable<any>;

  constructor(public afs: AngularFirestore,
              private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              private router: Router) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
    );
  }

  getItems(value: string, createdDate?) {
    if (createdDate) {
      this.items = this.afs.collection(value, ref => ref.orderBy(createdDate)).snapshotChanges().map(
        changes => {
          return changes.map(
            a => {
              const data = a.payload.doc.data() as DataModel;
              data.id = a.payload.doc.id;
              return data;
            });

        });
    } else {
      this.items = this.afs.collection(value).snapshotChanges().map(
        changes => {
          return changes.map(
            a => {
              const data = a.payload.doc.data() as DataModel;
              data.id = a.payload.doc.id;
              return data;
            });

        });
    }
    return this.items;
  }

  // getItem(collection: string, value: string) {
  //   if (createdDate) {
  //     this._afs.doc(`Users/${user.id}`);
  //     this.items = this.afs.doc(`${collection}/${value}`).valueChanges();
  //   } else {
  //     this.items = this.afs.collection(value).valueChanges();
  //   }
  //   return this.items;
  // }

  getItemsGroup(collection?: string, value?: string) {
    this.items = this.afs.doc(`${collection}/${value}`).valueChanges();
    return this.items;
  }

  addItem(value, data) {
    this.afs.collection(value).add(data);
  }

  updateItem(value, id, data) {
    this.afs.doc(`${value}/${id}`).update(data);
  }

  deleteItem(value, id) {
    this.afs.doc(`${value}/${id}`).delete();
  }


  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    return this.router.navigate(['/auth/login']);
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }

  async createUserDataEmail({ email }: UserModel, password) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.updateUserDataEmail(credential.user);
  }

  async loginEmail(email: string, password: string) {
    try {
      const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      await this.router.navigate(['/pages/forms/table/dat-phong']);
      return this.updateUserDataEmail(credential.user);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  async loginGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  private updateUserData({uid, email, displayName, imageUrl}: UserModel) {
    const userRef: AngularFirestoreDocument<UserModel> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      imageUrl,
    };
    return userRef.set(data, { merge : true });
  }

  private updateUserDataEmail({uid, email, displayName}: UserModel) {
    const userRef: AngularFirestoreDocument<UserModel> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
    };
    return userRef.set(data, { merge : true });
  }
}
