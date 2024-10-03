import {z} from "zod"

export const ConnexionValidationSchema = z.object({
    "email" : z.string("Email incorrect ")
    .min(5, {message : "Votre mail est requis"}),
    "password" : z.string()
    .min(8, {message : "Mot de passe requis au moins 8 caractères"})
})