import {z} from "zod"

export const PricingValidationSchema = z.object({
    "nom" : z.string("")
    .min(3, {message : "Votre nom est requis"}),
    "prenom" : z.string()
    .min(3, {message : "Votre prenom est requis"}),
    "company" : z.string()
    .min(3, {message : "Votre Compagnie est requis"}),
    "poste" : z.string()
    .min(3, {message : "Votre poste est requis"}),
    "website" : z.string()
    .min(3, {message : "Votre website est requis"}),
    "email" : z.string()
    .min(3, {message : "Votre email est requis"}),
})
