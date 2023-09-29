import { connectionDb } from "../db";
import user from "../model/user";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export async function POST(req) {
  try {
    await connectionDb();

    const { name, email, password } = await req.json();

    const { error } = schema.validate({ name, email, password });

    if (error) {
      return { success: false, message: "fill everythingggg" };
    }

    console.log(email);

    const isUserExist = await user.findOne({ email });

    if (isUserExist) {
      return { success: false, message: "email/username already exists" };
    } else {
      //hash
      const hashPassword = await hash(password, 12);

      // store in db

      const newUser = await user.create({
        name,
        email,
        password: hashPassword,
      });

      if (newUser) {
        console.log(newUser, "new user detail here");
        return { success: true, message: "registration successsfull" };
      } else {
        console.log("else");
        console.log("something happend please try again ");
      }
    }
  } catch (e) {
    console.log("errorr while registering user", e);
    return;
  }
}
