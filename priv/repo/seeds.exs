# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Trello.Repo.insert!(%Trello.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will halt execution if something goes wrong.

alias Trello.{Repo, User}

[
  %{
    first_name: "ken",
    last_name: "supermen",
    email: "test@gmail.com",
    password: "123456"
  }
]

|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))
