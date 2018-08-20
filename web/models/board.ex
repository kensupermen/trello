defmodule Trello.Board do
  use Trello.Web, :model

  schema "boards" do
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
