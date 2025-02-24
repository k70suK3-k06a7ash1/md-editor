import subprocess

def delete_commits(commit, metadata):
    # 削除したいコミットのハッシュをリストで指定
    delete_list = [
        b"15ae45b5637eb228a32e70845552ebdf3c297b4f",
        b"fcc6fad6475d4864a3ec9e2aeb3177a8e1230bac",
        b"7b03ed0f681c41791737cd3d29a6dbf3dede102b",
        b"915dc859bd993f8e7bcdadd7859a87c9de81f9fc",
        b"e1c0707e72539c80441d6bc1be2a61d145113b8b",
        b"7c7cea8a933a3c1820a719694a897bdced4b17be",
        b"12df33033d72e4ba6ff8ea18633aca4bc90fb6f8",
        b"b5620377e20644c883dd8af56456891636b788cb",
        b"1862dd198dffb38dde09ec64ce0a862209411143",
        b"21bc8f3d65a31508d65100d8c2f260678e866f5e",
    ]
    if commit.commit_id in delete_list:
        return False  # コミットをスキップ (削除)
    return True  # コミットを保持

