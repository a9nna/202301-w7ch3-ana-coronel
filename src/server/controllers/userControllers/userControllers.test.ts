import { type NextFunction, type Request, type Response } from "express";
import { createUser } from "./userControllers";
import { type UserStructure } from "./types";

describe("Given a createUser function", () => {
  describe("When it receives a res object", () => {
    test("Then it should return status 201 and a a object with user propery", async () => {
      const req: Partial<Request> = {};
      const res = {} as Response;
      const next = () => ({} as NextFunction);

      await createUser(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          UserStructure
        >,
        res,
        next
      );
    });
  });
});
