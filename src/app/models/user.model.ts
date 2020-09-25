export class User {
  constructor(
      private _token: string,
      public role: string,
      public email: string,
      public id: string,
      public name: string,
      public email_verified_at?: string,
      public age?: string,
      public gender?: string,
      public created_at?: string,
      public updated_at?: string,
      public deleted_at?: string,
  ) {}

  get token() {
    return this._token;
  }
}