import { GetServerSidePropsContext } from "next";
import { getServerSideProps } from "../../pages/user/[user_name]";
import axios from "axios";
import { cleanup, render } from "@testing-library/react";
import User from "../../pages/user/[user_name]";

afterEach(cleanup);
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Test [user_name] component", () => {
  describe("getServerSideProps", () => {
    it("should call get user by name api", async () => {
      const mockResponse = {
        data: {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org",
        },
      };
      jest.spyOn(axios, "get").mockImplementation(() => {
        return Promise.resolve(mockResponse);
      });

      const context = {
        query: { user_name: "Leanne Graham" } as any,
      };

      const response = await getServerSideProps(
        context as GetServerSidePropsContext
      );

      expect(response).toEqual(
        expect.objectContaining({
          props: mockResponse,
        })
      );
    });

    it("should return null, when api throw error", async () => {
      jest.spyOn(axios, "get").mockImplementation(() => {
        throw new Error("User not found");
      });

      const context = {
        query: { user_name: "Leanne Graham" } as any,
      };

      const response = await getServerSideProps(
        context as GetServerSidePropsContext
      );

      expect(response).toEqual(
        expect.objectContaining({
          props: { data: null },
        })
      );
    });
  });

  describe("User Component", () => {
    it("should show user not found", () => {
      const name = "test";
      useRouter.mockImplementation(() => ({ query: { user_name: name } }));

      const { getByTestId } = render(<User data={undefined} />);
      const message = getByTestId("error-message");
      expect(message).toHaveTextContent(
        `user_name of ${name} was found or not.`
      );
    });

    it("should show user details", () => {
      const userDetails = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      };
      useRouter.mockImplementation(() => ({ query: { user_name: "test" } }));

      const { getByTestId } = render(<User data={userDetails} />);
      const nameValue = getByTestId("context-value-name");
      const emailValue = getByTestId("context-value-email");
      const websiteValue = getByTestId("context-value-website");
      expect(nameValue).toHaveTextContent(userDetails.name);
      expect(emailValue).toHaveTextContent(userDetails.email);
      expect(websiteValue).toHaveTextContent(userDetails.website);
    });
  });
});
