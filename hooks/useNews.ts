import axios from "axios";
import { useState } from "react";

export default function useNews () {

    interface Source {
        id: string | null;
        name: string;
      }
      
      interface NewsArticle {
        source: Source;
        author: string | null;
        title: string;
        description: string;
        url: string;
        urlToImage: string | null;
        publishedAt: string; // ISO 8601 format date string
        content: string;
      }
      

    const [news, setNews] = useState<NewsArticle[]>([]);

    const getNews = async () : Promise<void> => {
        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=everything&from=2024-12-13&to=${new Date()}&sortBy=popularity&apiKey=c04912208e474d22944a420033c33d85`);

            const articles : NewsArticle[] = res.data.articles;
            
            const all_news = articles.filter(art => {
                return (
                  art.source.id !== null &&
                  art.source.name !== null &&
                  art.author !== null &&
                  art.title !== null &&
                  art.description !== null &&
                  art.url !== null &&
                  art.urlToImage !== null &&
                  art.publishedAt !== null &&
                  art.content !== null
                );
              });

            setNews(all_news);

            
        } catch (error) {
            console.log(error)
        }
    };
    
    return { getNews, news }
}