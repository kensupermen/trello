require IEx
defmodule Trello.BoardController do
  use Trello.Web, :controller

  alias Trello.{Repo, Board, User}

  def index(conn, _params) do
    owned_boards = Repo.all(Board)
    IEx.pry
    render conn, "index.json", owned_boards: owned_boards
  end

  def create(conn, %{"board" => board_params}) do
    IEx.pry
    current_user = Repo.get!(User, 1)
    changeset = current_user
      |> build_assoc(:owned_boards)
      |> Board.changeset(board_params)

    case Repo.insert(changeset) do
      {:ok, _post} ->
        conn
        |> put_status(:created)
        |> render("show.json", board: board_params)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render conn, "error.json", changeset: changeset
    end
  end
end
