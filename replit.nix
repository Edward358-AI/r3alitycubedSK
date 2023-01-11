{ pkgs }: {
  deps = [
    pkgs.busybox
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}