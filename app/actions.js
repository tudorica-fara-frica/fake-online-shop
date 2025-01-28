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

async function isImageUrlValid(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });

    if (!response.ok) {
      return false;
    }

    const contentType = response.headers.get("Content-Type");
    return contentType && contentType.startsWith("image/");
  } catch (error) {
    console.error("Eroare la verificarea URL-ului:", error);
    return false;
  }
}

export async function getPhotoById(id) {
  try {
    const supabase = createClient();
    const { data: url, error } = (await supabase).storage
      .from("images")
      .getPublicUrl(`product-${id}.jpeg`);
    if (error) {
      throw new Error(
        `Eroare la obtinerea pozei pentru produsul cu id ${id}: ${error.message}`,
      );
    }
    const isValid = await isImageUrlValid(url.publicUrl);
    if (!isValid) {
      const { data: fallbackUrl, error: fallbackError } = (
        await supabase
      ).storage
        .from("images")
        .getPublicUrl("default-product.jpg");
      if (fallbackError) {
        throw new Error(`Eroare la obtinerea pozei rezerva: ${error.message}`);
      }
      return fallbackUrl;
    }
    return url;
  } catch (error) {
    console.log(`A aparut o eroare. `, error);
    throw error;
  }
}

export async function getReviewsById(id) {
  try {
    const supabase = await createClient();
    const { data: reviews, error } = await supabase
      .from("Reviews")
      .select("content")
      .eq("product_id", id);
    if (error) {
      throw new Error(`Eroare la obtinerea review-urilor: ${error.message}`);
    }
    return reviews;
  } catch (error) {
    console.log(`A aparut o eroare`, error);
    throw error;
  }
}

export async function getRecommendedProductsByProductIdAndCategoryId({
  product_id,
  category_id,
}) {
  try {
    const supabase = await createClient();
    const { data: products, error } = await supabase
      .from("Products")
      .select("*")
      .eq("category_id", category_id)
      .neq("product_id", product_id);
    if (error) {
      throw new Error(
        `Eroare la obtinerea produselor recomandate: ${error.message}`,
      );
    }
    return products;
  } catch (error) {
    console.log(`A aparut o eroare`, error);
    throw error;
  }
}

export async function TudorPhoto() {
  try {
    const supabase = await createClient();
    const { data: photo, error } = (await supabase).storage
      .from("images")
      .getPublicUrl("square-1.jpg");
    if (error) {
      throw new Error(`Eroare la obtinerea pozei de profil: ${error.message}`);
    }
    return photo.publicUrl;
  } catch (error) {
    console.log("A aparut o eroare.", error);
    throw error;
  }
}

export async function Logo() {
  try {
    const supabase = await createClient();
    const { data: photo, error } = (await supabase).storage
      .from("images")
      .getPublicUrl("icon.png");
    if (error) {
      throw new Error(`Eroare la obtinerea logoului: ${error.message}`);
    }
    return photo.publicUrl;
  } catch (error) {
    console.log("A aparut o eroare.", error);
    throw error;
  }
}
