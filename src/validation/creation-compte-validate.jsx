import {z} from "zod"

export const CreationCompteValidationSchema = z.object({
    'nom' : z.string("Votre nom est requis")
    .min(3, {message : "Au moins 04 caractère"}),
    "prenom" : z.string("Votre prenom est requis")
    .min(4, {message : "Au moins 04 caractères"}),
    "email" : z.string("Email incorrect ")
    .min(10, {message : "Votre email est requis"}),
    "password" : z.string()
    .min(8, {message : "Mot de passe requis au moins 8 caractères"})
})