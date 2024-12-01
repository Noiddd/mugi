import { supabase } from "@/lib/supabase";
import { TablesInsert } from "database.types";
import { useMutation } from "@tanstack/react-query";

export const useInsertOrderItems = () => {
  return useMutation({
    async mutationFn(items: TablesInsert<"order_items">[]) {
      const { error, data: newOrder } = await supabase
        .from("order_items")
        .insert(items)
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return newOrder;
    },
  });
};
