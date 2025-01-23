"use server";

import { categories } from "@/dummyData";
import { products } from "@/dummyData";
import { createClient } from "@/utils/supabase/server";

export async function getDummyCategories() {
  await new Promise((res) => setTimeout(res, 2000));
  return categories;
}

export async function getDummyProducts() {
  await new Promise((r) => setTimeout(r, 2000));
  return products;
}

export async function insertDemoProducts() {
  try {
    const supabase = await createClient();
    const { error: deleteError } = await supabase
      .from("Products")
      .delete()
      .neq("product_id", 0);
    if (deleteError) {
      throw new Error(`Eroare la stergerea produselor: ${deleteError.message}`);
    }
    const { error: insertError } = await supabase
      .from("Products")
      .insert(products)
      .select();
    if (insertError) {
      throw new Error(`Eroare la inserarea produselor: ${insertError.message}`);
    }
    console.log("Produse inserate cu success");
  } catch (error) {
    console.log("A aparut o eroare", error);
    throw error;
  }
}

export async function getCategoryById(category_id) {
  try {
    const supabase = await createClient();
    const { data: Category, error } = await supabase
      .from("Categories")
      .select("*")
      .eq("category_id", category_id)
      .single();
    if (error) {
      throw new Error(`Eroare la obtinerea categoriei: ${error.message}`);
    }
    return Category;
  } catch (error) {
    console.log("A aparut o eroare", error);
    throw error;
  }
}

export async function getProductById(product_id) {
  try {
    const supabase = await createClient();
    const { data: Product, error } = await supabase
      .from("Products")
      .select("*")
      .eq("product_id", product_id)
      .single();
    if (error) {
      throw new Error(`Eroare la optinerea produsului: ${error.message}`);
    }
    return Product;
  } catch (error) {
    console.log("A aparut o eroare", error);
    throw error;
  }
}

export async function getProducts() {
  try {
    const supabase = await createClient();
    const { data: Products, error } = await supabase
      .from("Products")
      .select("*");
    if (error) {
      throw new Error(`Eroare la obtinerea produselor: ${error.message}`);
    }
    return Products;
  } catch (error) {
    console.log("A aparut o eroare", error);
    throw error;
  }
}

export async function insertDemoCategories() {
  try {
    const supabase = await createClient();
    const { error: deleteError } = await supabase
      .from("Categories")
      .delete()
      .neq("category_id", 0);

    if (deleteError) {
      throw new Error(
        `Eroare la ștergerea categoriilor existente: ${deleteError.message}`,
      );
    }

    const { error: insertError } = await supabase
      .from("Categories")
      .insert(categories);

    if (insertError) {
      throw new Error(
        `Eroare la inserarea categoriilor demo: ${insertError.message}`,
      );
    }

    console.log("Categorii demo inserate cu succes!");
  } catch (error) {
    console.error("A apărut o eroare:", error);
    throw error;
  }
}

export async function getCategories() {
  try {
    const supabase = await createClient();

    const { data: Categories, error } = await supabase
      .from("Categories")
      .select("*");

    if (error) {
      throw new Error(`Eroare la obtinerea categoriilor ${error.message}`);
    }

    return Categories;
  } catch (error) {
    console.log("A aparut o eroare", error);
    throw error;
  }
}
