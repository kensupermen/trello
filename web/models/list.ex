defmodule Trello.List do
  use Trello.Web, :model

  @derive {Poison.Encoder, only: [:id, :board_id, :name]}
  
  schema "lists" do
    field :name, :string
    belongs_to :board, Trello.Board, foreign_key: :board_id
    has_many :cards, Trello.Card
    
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
