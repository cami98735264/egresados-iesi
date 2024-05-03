import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function PaginatedItems({ itemsPerPage, questionsRetrieved }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const getQuestions = async () => {
            if(questionsRetrieved.length > 0) {
                setQuestions(questionsRetrieved);
                console.log(questionsRetrieved);
            }
        }
        getQuestions();
        
    }, [questionsRetrieved]);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = questions.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(questions.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % questions.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map((question, index) => {
        return (
          <div className="collapse collapse-plus bg-base-200" key={index}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-ml font-medium text-zinc-400">
            📌 {question.question}
            </div>
            <div className="collapse-content overflow-auto text-zinc-500">
              <p>{question.reply}</p>
            </div>
          </div>
        );
    })
      }
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName='pagination'
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;