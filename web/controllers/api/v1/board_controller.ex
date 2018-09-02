defmodule Trello.BoardController do
  use Trello.Web, :controller

  alias Trello.{Repo, Board, User, List, Card}

  def index(conn, _params) do
    owned_boards = Repo.all(Board)
    render conn, "index.json", owned_boards: owned_boards
  end

  def create(conn, %{"board" => board_params}) do
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

  def show(conn, %{"id" => board_id}) do
    board = Repo.get!(Board, board_id) |> Repo.preload(:lists)
    render conn, "show.json", board: board
  end

  def list(conn, %{"id" => list_id}) do
    list = Repo.get!(List, list_id) |> Repo.preload(:cards)
    render conn, "list.json", list: list
  end

  def create_list(conn, %{"list" => list_params}) do
    board = Repo.get!(Board, list_params["board_id"])
    
    changeset = board
    |> build_assoc(:lists)
    |> List.changeset(list_params)

    case Repo.insert(changeset) do
      {:ok, _list} ->
        conn
        |> put_status(:created)
        |> render("list.json", list: list_params)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render conn, "error.json", changeset: changeset
    end
  end

  def show_list(conn, %{"list_id" => list_id}) do
    lists = Repo.get(List, 1)
    render conn, "list.json", lists: lists
  end

  def create_card(conn, %{"card" => card_params}) do
    board = Repo.get!(Board, card_params["board_id"])

    changeset = board
    |> assoc(:lists)
    |> Repo.get!(card_params["list_id"])
    |> build_assoc(:cards)
    |> Card.changeset(card_params)

    case Repo.insert(changeset) do
      {:ok, _card} ->
        conn
        |> put_status(:created)
        |> render("card.json", card: card_params)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render conn, "error.json", changeset: changeset
    end
  end
end
