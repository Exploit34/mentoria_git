import type { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/hello";

describe("Get API api/hello", () => {
  it("debería responder con { name: 'John Doe' }", async () => {

    const req = {} as NextApiRequest;

    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status } as unknown as NextApiResponse;

    handler(req, res);

    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith({ name: "John Doe" });
  });
});