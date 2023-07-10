"use client"

import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Booklist.module.css";
import { searchBooks } from "@/utils/searchBooks";
import Image from "next/image";
// import Link from "next/link";
import search from "@/public/search.png"

export default function BookList(props) {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const cardContainerRef = useRef(null);
  const cardWidthRef = useRef(0);

  // useEffect(() => {
  //   if (bookName !== "") {
  //     searchBooks(bookName)
  //       .then((result) => {
  //         if (Array.isArray(result)) {
  //           setBooks(result);
  //         } else {
  //           setBooks([]); // Set books to an empty array if the result is not an array
  //         }
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   }
  // }, [bookName]);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const result = await searchBooks(bookName)

      setBooks(result);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    cardWidthRef.current = cardContainer.offsetWidth / 4; // Divide by the number of cards to scroll at once

    // Automatically scroll the card container every 5 seconds
    const intervalId = setInterval(() => {
      const currentScroll = cardContainer.scrollLeft;
      const maxScroll = cardContainer.scrollWidth - cardContainer.offsetWidth;

      if (currentScroll >= maxScroll) {
        // Reached the end, scroll back to the beginning with smooth transition
        cardContainer.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll to the next card with smooth transition
        cardContainer.scrollTo({
          left: currentScroll + cardWidthRef.current,
          behavior: "smooth",
        });
      }
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function toggleCategories() {
    const bookListContainer = document.querySelector(".bookSelector");
    bookListContainer.classList.toggle(styles["show-links"]);
  }

  // const booksComponent = books.map((book) => (
  //   <Card name={book.name} author={book.author}></Card>
  // ));

  return (
    <>

      <div className={`${styles["book-list-container"]} bookSelector`}>
        <h1 className={styles["book-list-heading"]}>Find your next learning adventure</h1>
        <p className={styles["smalltext"]}>From Art to Universe , we have a lots of textbooks to offer you.</p>

        <form className={styles["form"]}>
          <div className={styles["searchbar"]}>
            <input
              id="default-search"
              className={styles["search-input"]}
              onChange={(event) => setBookName(event.target.value)}
              placeholder="Title / Author / ISBN"
              required
            />
            <button type="submit" id="search-button-2" onClick={handleClick}>
              <div className={styles["search-icon"]}>
                <Image src={search} alt="search" width={300} height={200} />
              </div>
            </button>
          </div>
        </form>
        <div className={styles["categories"]} onClick={() => toggleCategories()}>
          Select Categories
        </div>
        <div className={styles["hypertext-links"]}>
          <div>
            <a href="#" className={styles["link"]}>
              Art
            </a>
            <a href="#" className={styles["link"]}>
              Biography
            </a>
            <a href="#" className={styles["link"]}>
              Business
            </a>
            <a href="#" className={styles["link"]}>
              Children&apos;s
            </a>
            <a href="#" className={styles["link"]}>
              Classics
            </a>
            <a href="#" className={styles["link"]}>
              Christian
            </a>
          </div>

          <div>
            <a href="#" className={styles["link"]}>
              Comics
            </a>
            <a href="#" className={styles["link"]}>
              Cookbooks
            </a>
            <a href="#" className={styles["link"]}>
              Ebooks
            </a>
            <a href="#" className={styles["link"]}>
              Fantasy
            </a>
            <a href="#" className={styles["link"]}>
              Fiction
            </a>
            <a href="#" className={styles["link"]}>
              Novel
            </a>
          </div>

          <div>
            <a href="#" className={styles["link"]}>
              History
            </a>
            <a href="#" className={styles["link"]}>
              Horror
            </a>
            <a href="#" className={styles["link"]}>
              Music
            </a>
            <a href="#" className={styles["link"]}>
              Mystery
            </a>
            <a href="#" className={styles["link"]}>
              Non-Fiction
            </a>
            <a href="#" className={styles["link"]}>
              Poetry
            </a>
          </div>

          <div>
            <a href="#" className={styles["link"]}>
              Psychology
            </a>
            <a href="#" className={styles["link"]}>
              Prejudice
            </a>
            <a href="#" className={styles["link"]}>
              Romance
            </a>
            <a href="#" className={styles["link"]}>
              Science
            </a>
            <a href="#" className={styles["link"]}>
              Thriller
            </a>
            <a href="#" className={styles["link"]}>
              Universe
            </a>
          </div>
        </div>




        {/* <span className="book-list-title text-center">Book List</span> */}

        {/* {
          books.length === 0 ?
            <div className={`flex items-center justify-center h-[53vh] bg-${props.theme} px-20`}>
              <h1 className="flex text-center items-center gap-4 text-4xl md:text-7xl">
                Search Books
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><path d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z" /></svg>
              </h1>
            </div> :
            <div className="cards">

              {
                books.map((book, key) => {
                  return (

                    <Card key={key} title={book.volumeInfo.title} description={book.volumeInfo.description} publisher={book.volumeInfo.publisher} pages={book.volumeInfo.pageCount} imgLink={book.volumeInfo.imageLinks} />
                  );
                })

              }
            </div>
        } */}


        <h3 className={styles["sub-head"]}>Quotes</h3>

        <div className={`${styles["carousel"]}`}>
          <div className={styles["card-container"]} ref={cardContainerRef}>
            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="https://lit216.pbworks.com/f/1363869393/stephen%20king.jpg" alt="Stephen King" width={300} height={200} />
                <h4>- Stephen King</h4>
                <p>&quot;If you don&apos;t have time to read, you don&apos;t have the time to write. Simple as that.&quot;</p>

              </div>
            </div>

            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="https://upload.wikimedia.org/wikipedia/en/c/c9/Madeleine_lengle.jpg" alt="Madeleine L'Engle" width={300} height={200} />
                <h4>- Madeleine L&apos;Engle</h4>
                <p>&quot;You have to write the book that wants to be written & if the book will be too difficult for grown-ups, then you write it for children.&quot;</p>

              </div>

            </div>

            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="http://laurencecoupe.co.uk/wp-content/uploads/2018/01/kerouac-picture.jpg" alt="Jack Kerouac" width={300} height={200} />
                <h4>- Jack Kerouac</h4>
                <p>&quot;One day I will find the right words, and they will be simple.&quot;</p>

              </div>

            </div>

            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="https://media.newyorker.com/photos/59096d586552fa0be682ff3d/master/w_1920,c_limit/Brody-Saul-Bellow-Film-Critic.jpg" alt="Saul Bellow" width={300} height={200} />
                <h4>- Saul Bellow</h4>
                <p>&quot;You never have to change anything you got up in the middle of the night to write.&quot;</p>

              </div>

            </div>

            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2Fgettyimages-2665140-a1c77ccabe8660fb5123c8b6c5741316.jpg" alt="Aldous Huxley" width={300} height={200} />
                <h4>- Aldous Huxley</h4>
                <p>&quot;Words can be like X-rays if you use them properly they&apos;ll go through anything. You read and you&apos;re pierced.&quot;</p>

              </div>

            </div>

            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="https://media.npr.org/assets/img/2015/03/13/ap070308060493-67009388c842c192821be288e72bbc06977b72ce-s400-c85.webp" alt="Anne Frank" width={300} height={200} />
                <h4>- Anne Frank</h4>
                <p>&quot;I can shake off everything as I write; my sorrows disappear, my courage is reborn.&quot;</p>

              </div>

            </div>

            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="https://ychef.files.bbci.co.uk/1600x900/p09pxt8c.webp" alt="Sylvia Plath" width={300} height={200} />
                <h4>- Sylvia Plath</h4>
                <p>&quot;Let me live, love, and say it well in good sentences.&quot;</p>

              </div>

            </div>

            <div className={styles["card"]}>
              <div className={styles["card-content"]}>
                <Image src="https://www.theparisreview.org/il/c625e7c0b9/large/JohnSteinbeck-thumb.jpg" alt="John Steinbeck" width={300} height={200} />
                <h4>- John Steinbeck</h4>
                <p>&quot;Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.&quot;</p>

              </div>
            </div>


          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}