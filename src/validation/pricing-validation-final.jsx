import {z} from "zod"

export const PricingValidationFinalSchema = z.object({
    "phone" : z.number("")
    .min(9, {message : "Votre numéro est requis"}),
})
