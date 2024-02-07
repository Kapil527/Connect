export interface NewDoctorRequestBody {
  education: string;
  experience?: string;
}

export interface UpdateDoctorDetailsBody {
  education?: String;
  experience?: String;
  price?: String;
  category?: String;
}

export interface AppointmentCheck {
  date: Date;
  startTime: Date;
  endTime: Date;
}

export type AppointmentCheckArray = AppointmentCheck[];
