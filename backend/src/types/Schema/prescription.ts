import { CommonType } from "./commonType";

export interface PrescriptionSchemaType extends CommonType {
  prescription: [{ medicineName: String; dosage: Number }];
}
