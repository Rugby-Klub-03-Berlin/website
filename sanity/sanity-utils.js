import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getBlogs() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
        _id,
        _createdAt,
        name,
        shortDescription,
        "slug": slug.current,
        publishedAt,
        "image": image.asset->url,
        url,
        content
      }`
  );
}

export async function getBlog(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        shortDescription,
        "slug": slug.current,
        publishedAt,
        "image": image.asset->url,
        url,
        content
      }`,
    { slug }
  );
}
export async function getGamereports() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "gamereport"]{
        _id,
        _createdAt,
        name,
        shortDescription,
        "slug": slug.current,
        publishedAt,
        "image": image.asset->url,
        url,
        content
      }`
  );
}

export async function getGameReport(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "gamereport" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        shortDescription,
        "slug": slug.current,
        publishedAt,
        "image": image.asset->url,
        url,
        content
      }`,
    { slug }
  );
}

export async function getEvents() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event"]{
        _id,
        _createdAt,
        name,
        shortDescription,
        "slug": slug.current,
        date,
        time
      }`
  );
}

export async function getTraningsGroups() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "training"]|order(orderRank){
        _id,
        _createdAt,
        name,
        trainer,
        "slug": slug.current,
        age,
        availability,
        gameplan,
        "image": image.asset->url,
      }`
  );
}

export async function getTraningGroup(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "training" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      trainer,
      "slug": slug.current,
      age,
      availability,
      gameplan,
      "image": image.asset->url,
      }`,
    { slug }
  );
}

export async function getBoards() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "board"]|order(orderRank){
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        description,
        email,
      }`
  );
}
export async function getDocuments() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "documents"]|order(orderRank){
        _id,
        _createdAt,
        name,
        "file": file.asset->url,
      }`
  );
}

export async function getChildProtection() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "child-protection"]{
        _id,
        _createdAt,
        "image": image.asset->url,
        content,
        email,
      }[0]`
  );
}
