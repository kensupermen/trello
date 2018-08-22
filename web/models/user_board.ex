defmodule Trello.UserBoard do
  use Trello.Web, :model

  schema "user_boards" do
    belongs_to :user, Trello.User, foreign_key: :user_id
    belongs_to :board, Trello.Board, foreign_key: :board_id

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [])
    |> validate_required([])
  end
end
