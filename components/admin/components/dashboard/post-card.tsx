import React from "react";
import DeletePost from "./delete-button";
import EditPost from "./edit-button";

export function PostCard() {
  return (
    <div className="bg-slate-400 p-4 rounded-lg">
      <div className="flex justify-between">
        <p className="text-xl">Title Title Title Title Title Title Title</p>
        <p className="text-md">Tue, 17 Jan 2023</p>
      </div>
      <div className="flex justify-between mt-8">
        <DeletePost />
        <EditPost />
      </div>
    </div>
  );
}
