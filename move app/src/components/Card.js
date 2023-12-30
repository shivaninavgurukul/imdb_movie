// Card.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ result }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid white",
        marginTop: 30,
        paddingBottom: 20,
      }}
    >
      {/* Left side (Image) */}
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          result.backdrop_path || result.poster_path
        }`}
        width={300}
        height={175}
        alt={`Poster for ${result.title || result.name}`}
        className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200 cursor-pointer"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {/* Right side (Movie details) */}
      <div style={{ padding: "1rem", flex: 1, flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: "70%" }}>
            {" "}
            <button onClick={openModal}>
              <h2
                className="text-lg font-bold cursor-pointer"
                onClick={openModal}
                style={{ marginBottom: "0.5rem" }}
              >
                {result.title || result.name}
              </h2>
            </button>
            <p>{result.overview}</p>
            <p className="flex items-center ">
              {result.first_air_date || result.release_date}
              <AiFillHeart
                className="text-red-500 ml-3 mr-1"
                aria-hidden="true"
              />{" "}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setLike(like + 1)}
              aria-label="Like"
              style={{
                cursor: "pointer",
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
              }}
            >
              {" "}
              <img
                style={{ height: 35, width: 35 }}
                src="./like.png"
                alt="Like button"
              />
            </button>
            <p
              style={{
                borderRadius: "50%",
                backgroundColor: "rgb(38,38,52)",
                padding: "5%",
                margin: "0 10px",
              }}
            >
              {" "}
              {like}
            </p>
            <button
              onClick={() => setDislike(dislike + 1)}
              aria-label="Dislike"
              style={{
                cursor: "pointer",
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
              }}
            >
              {" "}
              <img
                style={{ height: 35, width: 35 }}
                src="./dislike.png"
                alt="Dislike button"
              />
            </button>
            <p
              style={{
                borderRadius: "50%",
                backgroundColor: "rgb(38,38,52)",
                padding: "5%",
                margin: "0 10px",
                minWidth: 20,
              }}
            >
              {" "}
              {dislike}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "60%",
            height: "80%",
            maxWidth: "90%",
            maxHeight: "80%",
            overflowY: "auto",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            color: "black",
          }}
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={175}
            alt={`Poster for ${result.title || result.name}`}
            className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200 cursor-pointer"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h2
            className="text-lg font-bold mb-2"
            style={{ cursor: "pointer", color: "black" }}
            onClick={closeModal}
          >
            {result.title || result.name}
          </h2>
          <p>{result.overview}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}

      {/* Overlay */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={closeModal}
        ></div>
      )}
    </div>
  );
};

export default Card;
