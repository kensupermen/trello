defmodule Trello.Repo.Migrations.CreateList do
  use Ecto.Migration

  def change do
    create table(:lists) do
      add :name, :string
      add :board_id, references(:boards, on_delete: :delete_all), null: false

      timestamps()
    end

    create index(:lists, [:board_id])
  end
end
