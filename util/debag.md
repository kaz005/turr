# バグ修正手順

## 1. フォントファイルのパス修正
- **ファイル**: `src/app/layout.tsx`
- **修正内容**:
  - フォントファイルのパスを正しく設定します。
  - 修正前:
    ```typescript
    const geistSans = localFont({
      src: "../..//public/fonts/GeistVF.woff",
    });
    const geistMono = localFont({
      src: "../../public/fonts/GeistMonoVF.woff",
    });
    ```
  - 修正後:
    ```typescript
    const geistSans = localFont({
      src: "/fonts/GeistVF.woff", // 正しいパス
    });
    const geistMono = localFont({
      src: "/fonts/GeistMonoVF.woff", // 正しいパス
    });
    ```

## 2. SVGファイルのパス修正
- **ファイル**: `src/app/layout.tsx`
- **修正内容**:
  - SVGファイルのパスを正しく設定します。
  - 修正前:
    ```typescript
    import placeholder from '/placeholder.svg';
    ```
  - 修正後:
    ```typescript
    import placeholder from '/images/placeholder.svg'; // 正しいパス
    ```

## 3. Tailwind CSSの設定確認
- **ファイル**: `tailwind.config.ts`
- **修正内容**:
  - `content`オプションが正しく設定されていることを確認します。
  - 例:
    ```typescript
    const config: Config = {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
          },
        },
      },
      plugins: [],
    };
    ```

## 4. ビルドの確認
- 修正後、以下のコマンドを実行してビルドが成功するか確認します。
  ```bash
  npm run build
  ```

## 5. エラーメッセージの確認
- ビルド中にエラーメッセージが表示された場合は、該当するファイルとパスを再確認し、必要に応じて修正を行います。
