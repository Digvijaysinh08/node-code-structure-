import mongoose, { Document, Schema, Model } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    createdAt: Date;
}

interface IUserModel extends Model<IUser> {
    findAllUsers(): Promise<IUser[]>;
    createUser(userData: Partial<IUser>): Promise<IUser>;
}

const userSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.statics.findAllUsers = async function (): Promise<IUser[]> {
    return await this.find();
};

userSchema.statics.createUser = async function (userData: Partial<IUser>): Promise<IUser> {
    return await this.create(userData);
};

const User: IUserModel = mongoose.model<IUser, IUserModel>('User', userSchema);

export default User;
