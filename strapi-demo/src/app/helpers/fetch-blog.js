import config from "@/config"

const fetchBlogs = async(params) => {
    const reqOptions = {
        headers:{
            "Cache-Control": "no-cache, no-store",
            Authorization: `Bearer ${process.env.API_TOKEN}`
        },
        cache: 'no-cache',
    }

    const request = await fetch(`${config.api}/api/blogs?populate=*&${params}`,reqOptions);
    const response = await request.json();

    return response;
}

export default fetchBlogs