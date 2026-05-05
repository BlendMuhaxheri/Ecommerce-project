export function getProductIdFromSlug(slug:string){
    const parts = slug.split("-");
    return Number(parts[parts.length - 1]);
}