export class UserModel {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  password: string;
  confirmPassword: string;
  status: boolean;

  constructor() {}

}
