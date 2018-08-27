defmodule Trello.Card do
  use Trello.Web, :model

  @derive {Poison.Encoder, only: [:id, :list_id, :name]}

  schema "cards" do
    field :name, :string
    belongs_to :list, Trello.List, foreign_key: :list_id

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
