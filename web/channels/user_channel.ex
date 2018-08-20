defmodule Trello.UserChannel do
  use Trello.Web, :channel

  def join(name, _params, socket) do
    IO.puts(name)
    {:ok, %{hey: "there"}, socket}
  end

  def handle_in(event, msg, arg2) do
  end
end
