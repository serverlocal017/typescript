function echo<T>(arg: T): T {
  return arg;
}

echo<string>('HEllo');
echo<number>(20); 