import { toast } from "@zerodevx/svelte-toast";

export const success = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "#70a37f",
      "--toastBarBackground": "#FFFF",
    },
  });

export const failure = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "#bf4342",
      "--toastBarBackground": "#FFFF",
    },
  });
