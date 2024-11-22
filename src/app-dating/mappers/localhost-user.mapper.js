import { User } from "../models/users"


export const localUserToModel = (localHostUser) => {

    const {
        gender,
        name,
        location,
        email,
        login,
        dob,
        phone,
        cell,
        id,
        picture,

    } = localHostUser;

    return new User({
        fullId: id.value,
        gender,
        fullName: name.first + " " + name.last,
        fullPicture: picture.medium,
        isFavorite: false,
    });

}