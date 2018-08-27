defmodule Trello.Board do
  use Trello.Web, :model

  @derive {Poison.Encoder, only: [:id, :name]}

  schema "boards" do
    has_many :user_boards, Trello.UserBoard
    has_many :members, through: [:user_boards, :user]
    has_many :lists, Trello.List

    field :name, :string
    belongs_to :user, Trello.User, foreign_key: :user_id

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name])
    |> validate_required([:name])
  end
end
