import $api from "../http";

export class ScheduleService {
  static async getTime() {
    return await $api.post(`/get-by-doctor-date/${7}/${"2022-08-18"}`);
  }
}
