import Joi from "joi";

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  username: Joi.string().min(6),
  phoneNumber: Joi.string().min(10).max(11),
  address: Joi.string(),
  avatar: Joi.string(),
});
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
