export const statusToColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "border-4 border-green-500 bg-green-200 font-bold text-green-800";
    case "inactive":
      return "border-4 border-red-500 bg-red-200 font-bold text-red-800";
    case "ready":
      return "border-4 border-green-500 bg-green-200 font-bold text-green-800";
    case "processed":
      return "border-4 border-blue-500 bg-blue-200 font-bold text-blue-800";
    case "processing":
      return "border-4 border-yellow-500 bg-yellow-200 font-bold text-yellow-800";
    case "uploaded":
      return "border-4 border-gray-500 bg-gray-200 font-bold text-gray-800";
    case "uploading":
      return "border-4 border-orange-500 bg-orange-200 font-bold text-orange-800";
    default: {
      return "border-4 border-red-500 bg-red-200 font-bold text-red-800";
    }
  }
};
