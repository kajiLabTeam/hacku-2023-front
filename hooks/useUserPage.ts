import { useCallback, useState } from "react";

export const useUserPage = () => {
  const formatNumber = useCallback((views: number): string => {
    if (views >= 10000) {
      return `${Math.floor(views / 10000)}万`;
    } else if (views >= 1000) {
      return `${Math.floor(views / 1000)}千`;
    } else {
      return views.toString();
    }
  }, []);

  const isExistsImg = (imgURL: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imgURL;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  return { formatNumber, isExistsImg };
};
