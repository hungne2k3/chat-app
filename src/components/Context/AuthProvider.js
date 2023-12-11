import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config";
import { Spin } from "antd";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [hasReloaded, setHasReloaded] = useState(false);

  // Tiến hành lắng nghe sự khiện khi mà chúng ta đăng nhập thành công

  React.useEffect(() => {
    // neu người dùng đăng nhập thành công thì sẽ thông báo

    const unsubscibed = auth.onAuthStateChanged((user) => {
      // lắng nghe sự kiện onAuthStateChanged thì khi chúng ta Login, user không còn hợp lệ nữa, thì đoạn code bên không còn thực thi và chạy đến đoạn code history.push("/login"); để đăng nhập lại
      console.log({ user });
      if (user) {
        // lay ten, email, ava, id

        const { displayName, email, uid, photoURL } = user;
        // Dang nhap thanh cong

        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        history.push("/");
        return;
      }

      // reset user info
      setUser({});
      // sau khi dang xuat k xet lai: setIsLoading(false); thi se co icon loading load lien tuc, nen can set lai

      setIsLoading(false);
      history.push("/login");
    });

    // clean function
    return () => {
      unsubscibed();
    };
  }, [history, hasReloaded]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin style={{ position: "fixed", inset: 0 }} /> : children}
    </AuthContext.Provider>
  );
}
