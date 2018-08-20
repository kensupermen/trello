defmodule Trello.BoardController do
  use Trello.Web, :controller

  alias Trello.{Repo, Board}

  def index(conn, _params) do
    boards = Repo.all(Board)
    render conn, "index.json", owned_boards: boards
  end

  def create(conn, %{"board" => board}) do
    changeset = Board.changeset(%Board{}, board)

    case Repo.insert(changeset) do
      {:ok, _post} ->
        conn
        |> put_status(:created)
        |> render("show.json", board: board)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render conn, "error.json", changeset: changeset
    end
  end
end
