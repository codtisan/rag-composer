export const statusToColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "border-4 border-green-500 bg-green-200 font-bold text-green-800";
    case "inactive":
      return "border-4 border-red-500 bg-red-200 font-bold text-red-800";
    default: {
      return "border-4 border-red-500 bg-red-200 font-bold text-red-800";
    }
  }
};
