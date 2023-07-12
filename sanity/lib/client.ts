import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skasnfFfIBxReWSf4zcpDroScRKOx9gutRQeiCtHx71RcuRNb5Rn8VDwmE7bKYsTi0uO663i8CqKbkOt5TTDeWDjcDAR6X5iUtwuwgVOYl3XVMp5NmelWf3ZfJW8AeOBhUfDpPO6aFFSSs6Cocea1RTr8Rts4lMszSnzoq1sGmpxfKY0g8iu",
})
