import User from "../models/user.js";
import '../config/firebase.js'
import { getAuth } from "firebase-admin/auth";
import { signToken } from "../libs/jwt.js";

export const authUser = async (idToken: string) => {
    const decoded = await getAuth().verifyIdToken(idToken);

    const { uid, name, email, picture } = decoded;

    if (!(uid && name && email && picture)) {
        throw new Error("Incomplete Google profile");
    }

    let user = await User.findOne({ googleId: uid });

    if (!user) {
        user = await User.create({
            googleId: uid,
            name,
            email,
            avatar: picture,
        });
    }

    const token = signToken({
        userId: user._id,
    });

    return { token, user };
}