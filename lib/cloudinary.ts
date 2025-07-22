interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  secure_url: string;
  display_name: string;
  width: number;
  height: number;
}

interface MappedImage {
  id: string;
  title: string;
  image: string;
  displayName: string;
  width: number;
  height: number;
}


export function mapImageResources(resources: CloudinaryResource[]): MappedImage[] {
  return resources.map((resource) => {
    const { width, height, display_name, public_id } = resource;

    return {
      id: resource.asset_id,
      title: public_id,
      image: resource.secure_url,
      displayName: display_name || public_id, // fallback here
      width,
      height,
    };
  });
}


