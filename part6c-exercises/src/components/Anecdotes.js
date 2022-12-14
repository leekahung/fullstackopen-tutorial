import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteReducer";
import { runNotification } from "../reducers/notificationReducer";

import Notification from "./Notification";
import Filter from "./Filter";

const Anecdote = ({ anecdote, handleUpvote }) => {
  return (
    <div>
      {anecdote.content}
      <br />
      {anecdote.votes} <button onClick={handleUpvote}>vote</button>
    </div>
  );
};

const Anecdotes = () => {
  const anecdotes = useSelector((state) => {
    const allAncedotes = state.anecdotes.slice();
    const sortedAnecdotes = allAncedotes.sort(function (a, b) {
      return b.votes - a.votes;
    });

    if (state.filters !== "") {
      return sortedAnecdotes.filter((a) =>
        a.content.toLowerCase().includes(state.filters)
      );
    }
    return sortedAnecdotes;
  });
  const dispatch = useDispatch();

  const handleUpvote = async (anecdote) => {
    dispatch(updateAnecdote(anecdote));
    dispatch(runNotification(`You voted for "${anecdote.content}"`, 4000));
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <Filter />
      <div>
        {anecdotes.map((a) => {
          return (
            <Anecdote
              key={a.id}
              anecdote={a}
              handleUpvote={() => handleUpvote(a)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Anecdotes;
