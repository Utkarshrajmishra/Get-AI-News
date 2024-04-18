import React, { useEffect } from 'react';
import './News.css';
import NewsArea from '../NewsArea/NewsArea';
import { useState } from 'react';
import config from '../../config/config';
import geminiService from '../../geminiServices/GeminiServices';

const News = () => {
  const [news, changeNews] = useState(null);
  const [newsInfo, setInfo] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch(config.RSSNewsFeed)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        return changeNews(jsonData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });

  const setNews = (content, type) => {
    setLoader(true);
    setInfo(null);

    if (content == 'Summary') {
      type += 'in 60 worlds';
    }
    if (content == 'Tweet') {
      type += 'also add emoji and hastags';
    }
    geminiService
      .run(
        `${content}.    Generate a ${type} for this news .Add <br/> tag where line and two <br/> paragraph and also add <br/> tag in the end of every point, list element, etc and remove every * from it `
      )
      .then((news) => {
        if (news) {
          setLoader(false);
          setInfo(news);
         
        }
        return;
      })
      .catch((error) => {
        return setInfo(`Error:: ${error}`);
      });
  };

  return (
    <>
      <section className="flex justify-center outer">
        <section className="text-white  rounded-[20px] w-[90%] ">
          <section className="px-10 py-5 w-full">
            <h2 className="text-3xl font-bold  w-full text-center text-white">
              Latest AI News
            </h2>
            {news &&
              news.items &&
              news.items.map((news, index) =>
                index != 0 && index < 10 ? (
                  <section className="flex flex-col gap-5">
                    <section className="flex flex-col gap-3 mt-6 ">
                      <section className="flex items-center gap-2">
                        <div className="h-[18px] w-[18px] bg-green-500 rounded-full inline-block">
                          {' '}
                        </div>
                        <h2 className=" font-sans font-medium">
                          <a key={index} href={news.url} target="blank">
                            {news.title}
                          </a>
                        </h2>
                      </section>
                      <section className="flex md:gap-10 gap-3 mt-2 mb-2">
                        <button
                          className=" text-sm py-2 px-2 font-sans bg-green-500 rounded-lg"
                          onClick={() => setNews(news.title, 'Blog')}
                        >
                          Genrate blog
                        </button>
                        <button
                          className="bg-green-500  text-sm font-sans px-2 py-2 rounded-lg "
                          onClick={() => setNews(news.title, 'Tweet')}
                        >
                          Generate Tweet
                        </button>
                        <button
                          className="bg-green-500  text-sm font-sans px-2 py-2 rounded-lg "
                          onClick={() => setNews(news.title, 'Summary')}
                        >
                          Summarize News
                        </button>
                      </section>
                      <hr />
                    </section>
                  </section>
                ) : (
                  ''
                )
              )}
          </section>
        </section>
      </section>
      <NewsArea props={{ text: newsInfo, loader: loader }} />
    </>
  );
};

export default News;
